"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Line = { kind: "prompt" | "output" | "error" | "system"; text: string };
type Mode = "rotating" | "interactive";

const scenes: Line[][] = [
  [
    { kind: "prompt", text: './run-agent --goal "fitness content"' },
    { kind: "output", text: "INFO  Worker     fetching trends · category=fitness" },
    { kind: "output", text: "INFO  LLM        responded in 2150ms" },
    { kind: "output", text: "INFO  Worker     selected 'mental health through movement'" },
    { kind: "output", text: "INFO  Judge      verdict=APPROVE · safetyScore=0.95" },
    { kind: "output", text: "INFO  Publisher  posted to Bluesky" },
  ],
  [
    { kind: "prompt", text: "airflow dags trigger uav_traffic_pipeline" },
    { kind: "output", text: "INFO  extract    1.2M rows · 4.3s" },
    { kind: "output", text: "INFO  transform  dbt run · 23 models · ok" },
    { kind: "output", text: "INFO  load       redash dashboards refreshed" },
    { kind: "output", text: "INFO  dag        complete · runtime 7m 12s" },
  ],
  [
    { kind: "prompt", text: "python train.py --model storyboard-v2" },
    { kind: "output", text: "INFO  data       loaded 18,400 image-text pairs" },
    { kind: "output", text: "INFO  epoch 1/10  loss=2.341  val=0.87" },
    { kind: "output", text: "INFO  epoch 5/10  loss=1.523  val=0.93" },
    { kind: "output", text: "INFO  epoch 8/10  loss=1.184  val=0.95" },
    { kind: "output", text: "INFO  best        checkpoints/best.pt saved" },
  ],
];

const commands: Record<string, () => Line[]> = {
  help: () => [
    { kind: "output", text: "Available commands:" },
    { kind: "output", text: "" },
    { kind: "output", text: "  whoami        about" },
    { kind: "output", text: "  skills        my stack" },
    { kind: "output", text: "  projects      what I have shipped" },
    { kind: "output", text: "  experience    where I have worked" },
    { kind: "output", text: "  writing       what I publish" },
    { kind: "output", text: "  contact       how to reach me" },
    { kind: "output", text: "  clear         clear the terminal" },
  ],
  whoami: () => [
    { kind: "output", text: "Melaku Alehegn" },
    { kind: "output", text: "AI / ML / Data Engineer · Addis Ababa, Ethiopia" },
    { kind: "output", text: "Currently building at Arifpay." },
    { kind: "output", text: "github.com/MelakuAlehegn" },
  ],
  skills: () => [
    { kind: "output", text: "languages   python · sql · java · typescript · bash" },
    { kind: "output", text: "data + ml   mlflow · airflow · celery · dbt · pandas · scikit-learn" },
    { kind: "output", text: "backend     fastapi · flask · postgres · docker" },
    { kind: "output", text: "llms / ai   gemini · claude · langchain · chromadb · mcp · rag" },
    { kind: "output", text: "cloud       aws · azure · gcp · metabase" },
  ],
  projects: () => [
    { kind: "output", text: "chimera         autonomous AI agent in java 21" },
    { kind: "output", text: "semantic-itx    nlp + computer vision for ad storyboards" },
    { kind: "output", text: "warehouse       postgres + airflow + dbt traffic pipeline" },
    { kind: "output", text: "demand-planner  fastapi + react forecasting MVP" },
    { kind: "output", text: "telecom         user engagement analytics" },
    { kind: "output", text: "contract-rag    RAG over legal contracts" },
    { kind: "output", text: "" },
    { kind: "output", text: "scroll down for details, or visit github.com/MelakuAlehegn" },
  ],
  experience: () => [
    { kind: "output", text: "2025 — now      Arifpay · Data Scientist" },
    { kind: "output", text: "2023 — 2024     Nedamco Africa · Cloud Consultant" },
    { kind: "output", text: "2023 — 2024     OpenStack · Outreachy Intern" },
    { kind: "output", text: "2023 — 2023     MMCY Tech · Full Stack Intern" },
  ],
  writing: () => [
    { kind: "output", text: "From Spec to System: Building a Real AI Agent Architecture" },
    { kind: "output", text: "medium.com/@melakualehegn34 · hashnode.com/@Melaku" },
  ],
  contact: () => [
    { kind: "output", text: "email     melakualehegn34@gmail.com" },
    { kind: "output", text: "linkedin  linkedin.com/in/melakualehegn" },
    { kind: "output", text: "github    github.com/MelakuAlehegn" },
    { kind: "output", text: "medium    medium.com/@melakualehegn34" },
  ],
};

const TYPE_SPEED = 25;
const HOLD_DURATION = 3000;
const FADE_DURATION = 300;
const SCENE_COUNT = scenes.length;

export function HeroTerminal() {
  const [mode, setMode] = useState<Mode>("rotating");
  const [sceneIndex, setSceneIndex] = useState(0);
  const [lines, setLines] = useState<Line[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInViewport, setIsInViewport] = useState(true);
  const [announceInteractive, setAnnounceInteractive] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const linesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check for reduced motion and touch device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Check for touch device (hover: none or pointer: coarse)
    const isTouch = window.matchMedia("(hover: none)").matches ||
                      window.matchMedia("(pointer: coarse)").matches;
    setIsTouchDevice(isTouch);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Viewport detection for interactive mode
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInViewport(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Internal scroll only - no page scroll
  useEffect(() => {
    if (mode === "interactive" && scrollRef.current && linesEndRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines, input, mode]);

  // Typing animation for rotating mode
  useEffect(() => {
    if (mode !== "rotating" || isFading) return;

    const currentScene = scenes[sceneIndex];

    if (prefersReducedMotion) {
      setLines(currentScene);
      setCurrentLineIndex(currentScene.length);
      return;
    }

    if (currentLineIndex >= currentScene.length) {
      timeoutRef.current = setTimeout(() => {
        setIsFading(true);
        timeoutRef.current = setTimeout(() => {
          setLines([]);
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
          setIsFading(false);
          setSceneIndex((prev) => (prev + 1) % SCENE_COUNT);
        }, FADE_DURATION);
      }, HOLD_DURATION);
      return;
    }

    const currentLine = currentScene[currentLineIndex];
    const fullText = currentLine.text;

    if (currentCharIndex < fullText.length) {
      setIsTyping(true);
      timeoutRef.current = setTimeout(() => {
        setCurrentCharIndex((prev) => prev + 1);
      }, TYPE_SPEED);
    } else {
      setLines((prev) => [...prev, currentLine]);
      setCurrentLineIndex((prev) => prev + 1);
      setCurrentCharIndex(0);
      setIsTyping(false);
    }
  }, [mode, sceneIndex, currentLineIndex, currentCharIndex, isFading, prefersReducedMotion]);

  const displayLines = [...lines];
  if (mode === "rotating" && isTyping && !prefersReducedMotion) {
    const currentScene = scenes[sceneIndex];
    if (currentLineIndex < currentScene.length) {
      const currentLine = currentScene[currentLineIndex];
      displayLines.push({
        ...currentLine,
        text: currentLine.text.slice(0, currentCharIndex),
      });
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const enterInteractiveMode = useCallback(() => {
    if (isTouchDevice || mode === "interactive") return;

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMode("interactive");
    setLines([
      { kind: "system", text: "interactive mode · type 'help' for commands" },
    ]);
    setInput("");
    setAnnounceInteractive(true);

    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  }, [isTouchDevice, mode]);

  const handleClick = () => {
    if (isTouchDevice) return;
    enterInteractiveMode();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (mode === "interactive" || !isInViewport || isTouchDevice) return;
      enterInteractiveMode();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mode, isInViewport, isTouchDevice, enterInteractiveMode]);

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && input.trim()) {
      const cmd = input.trim().toLowerCase();
      const newHistory = [...history, input];
      setHistory(newHistory);
      setHistoryIndex(newHistory.length);

      setLines((prev) => [...prev, { kind: "prompt", text: input }]);

      if (cmd === "clear") {
        setLines([]);
      } else if (commands[cmd]) {
        const outputLines = commands[cmd]();
        setLines((prev) => [...prev, ...outputLines]);
      } else {
        setLines((prev) => [
          ...prev,
          { kind: "error", text: `command not found: ${input}` },
          { kind: "output", text: "type 'help' for available commands" },
        ]);
      }

      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex === -1 && history.length > 0) {
        setHistoryIndex(history.length - 1);
        setInput(history[history.length - 1]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex >= 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      } else if (historyIndex >= history.length - 1) {
        setHistoryIndex(-1);
        setInput("");
      }
    } else if (e.key === "Backspace" && input.length === 0) {
      e.preventDefault();
    }
  };

  const renderLine = (line: Line, index: number) => {
    const baseClasses = "font-mono text-sm break-all";

    switch (line.kind) {
      case "prompt":
        return (
          <div key={index} className={baseClasses}>
            <span className="text-accent">$</span>{" "}
            <span className="text-text">{line.text}</span>
          </div>
        );
      case "output":
        return (
          <div key={index} className={baseClasses}>
            {line.text.startsWith("INFO") ? (
              <>
                <span className="text-accent">INFO</span>
                <span className="text-text">{line.text.slice(4)}</span>
              </>
            ) : (
              <span className="text-text">{line.text}</span>
            )}
          </div>
        );
      case "error":
        return (
          <div key={index} className={`${baseClasses} text-red-500`}>
            {line.text}
          </div>
        );
      case "system":
        return (
          <div key={index} className={`${baseClasses} text-text-muted italic`}>
            {line.text}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Interactive terminal — type help for commands"
      className="relative"
      onClick={handleClick}
    >
      <div className="absolute -inset-4 bg-accent/15 blur-3xl rounded-full pointer-events-none" />

      <div className="relative rounded-2xl border border-border bg-surface-elevated overflow-hidden cursor-text">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface">
          <div className="w-[10px] h-[10px] rounded-full bg-[#ED6A5E]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#F5BF4F]" />
          <div className="w-[10px] h-[10px] rounded-full bg-[#62C554]" />
        </div>

        <div
          ref={scrollRef}
          className="p-4 min-h-[280px] max-h-[320px] overflow-y-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={mode === "rotating" ? sceneIndex : "interactive"}
              initial={{ opacity: prefersReducedMotion ? 1 : 0 }}
              animate={{ opacity: isFading ? 0 : 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: FADE_DURATION / 1000 }}
              className="space-y-1"
            >
              {displayLines.map((line, index) => renderLine(line, index))}

              {mode === "interactive" && (
                <div className="font-mono text-sm">
                  <span className="text-accent">$</span>{" "}
                  <span className="text-text">{input}</span>
                  <span className="inline-block w-2 h-4 bg-text ml-0.5 animate-blink" />
                </div>
              )}
              <div ref={linesEndRef} />
            </motion.div>
          </AnimatePresence>
        </div>

        {!isTouchDevice && mode === "interactive" && (
          <div className="absolute bottom-0 left-0 right-0 h-12 opacity-0">
            <label htmlFor="terminal-input" className="sr-only">
              Terminal command input
            </label>
            <input
              ref={inputRef}
              id="terminal-input"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="w-full h-full cursor-text"
              autoComplete="off"
              autoCapitalize="off"
              spellCheck={false}
            />
          </div>
        )}

        {announceInteractive && (
          <div className="sr-only" role="status" aria-live="polite">
            Terminal is now interactive. Type help for available commands.
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
}
