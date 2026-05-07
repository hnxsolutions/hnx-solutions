"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { defaultIndustryKey, goalOptions, industryData } from "@/lib/industryDemoData";
import type { DemoTabKey, GoalKey, IndustryData, IndustryKey, RoleName } from "@/lib/demoTypes";

type DemoContextValue = {
  selectedIndustry: IndustryKey;
  setSelectedIndustry: (industry: IndustryKey) => void;
  selectedGoals: GoalKey[];
  toggleGoal: (goal: GoalKey) => void;
  setSelectedGoals: (goals: GoalKey[]) => void;
  activeTab: DemoTabKey;
  setActiveTab: (tab: DemoTabKey) => void;
  exploredTabs: DemoTabKey[];
  simulationsRun: string[];
  markSimulationRun: (simulation: string) => void;
  isGuideVisible: boolean;
  setIsGuideVisible: (visible: boolean) => void;
  selectedRole: RoleName;
  setSelectedRole: (role: RoleName) => void;
  isDarkMode: boolean;
  setIsDarkMode: (enabled: boolean) => void;
  demoData: IndustryData;
  resetDemo: () => void;
  shareUrl: string;
  highlightedTabs: DemoTabKey[];
};

const DemoContext = createContext<DemoContextValue | null>(null);

const storageKey = "hnx-crm-enhanced-demo-state";
const roleOptions: RoleName[] = ["Business Owner", "Admin", "Manager", "Sales User", "Operations User"];

type StoredState = {
  selectedIndustry?: IndustryKey;
  selectedGoals?: GoalKey[];
  activeTab?: DemoTabKey;
  exploredTabs?: DemoTabKey[];
  simulationsRun?: string[];
  selectedRole?: RoleName;
  isGuideVisible?: boolean;
  isDarkMode?: boolean;
};

function isIndustry(value: string | null): value is IndustryKey {
  return Boolean(value && value in industryData);
}

function isGoal(value: string | null): value is GoalKey {
  return Boolean(value && goalOptions.some((goal) => goal.key === value));
}

function isRole(value: unknown): value is RoleName {
  return typeof value === "string" && roleOptions.includes(value as RoleName);
}

export function DemoProvider({ children }: { children: ReactNode }) {
  const [selectedIndustry, setSelectedIndustryState] = useState<IndustryKey>(defaultIndustryKey);
  const [selectedGoals, setSelectedGoalsState] = useState<GoalKey[]>([]);
  const [activeTabState, setActiveTabState] = useState<DemoTabKey>("overview");
  const [exploredTabs, setExploredTabs] = useState<DemoTabKey[]>(["overview"]);
  const [simulationsRun, setSimulationsRun] = useState<string[]>([]);
  const [isGuideVisible, setIsGuideVisible] = useState(true);
  const [selectedRole, setSelectedRole] = useState<RoleName>("Business Owner");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    try {
      const storedRaw = window.sessionStorage.getItem(storageKey);
      const stored = storedRaw ? (JSON.parse(storedRaw) as StoredState) : {};
      const params = new URLSearchParams(window.location.search);
      const industryFromUrl = params.get("industry");
      const goalFromUrl = params.get("goal");

      if (stored.selectedIndustry && stored.selectedIndustry in industryData) {
        setSelectedIndustryState(stored.selectedIndustry);
      }
      if (Array.isArray(stored.selectedGoals)) {
        setSelectedGoalsState(stored.selectedGoals.filter((goal) => isGoal(goal)).slice(0, 2));
      }
      if (stored.activeTab) {
        setActiveTabState(stored.activeTab);
      }
      if (Array.isArray(stored.exploredTabs) && stored.exploredTabs.length) {
        setExploredTabs(stored.exploredTabs);
      }
      if (Array.isArray(stored.simulationsRun)) {
        setSimulationsRun(stored.simulationsRun);
      }
      if (isRole(stored.selectedRole)) {
        setSelectedRole(stored.selectedRole);
      }
      if (typeof stored.isGuideVisible === "boolean") {
        setIsGuideVisible(stored.isGuideVisible);
      }
      if (typeof stored.isDarkMode === "boolean") {
        setIsDarkMode(stored.isDarkMode);
      } else if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
        setIsDarkMode(true);
      }
      if (isIndustry(industryFromUrl)) {
        setSelectedIndustryState(industryFromUrl);
        setActiveTabState("overview");
      }
      if (isGoal(goalFromUrl)) {
        setSelectedGoalsState([goalFromUrl]);
      }
    } catch {
      setSelectedIndustryState(defaultIndustryKey);
    }
  }, []);

  useEffect(() => {
    try {
      window.sessionStorage.setItem(
        storageKey,
        JSON.stringify({
          selectedIndustry,
          selectedGoals,
          activeTab: activeTabState,
          exploredTabs,
          simulationsRun,
          selectedRole,
          isGuideVisible,
          isDarkMode,
        }),
      );

      const url = new URL(window.location.href);
      url.searchParams.set("industry", selectedIndustry);
      if (selectedGoals[0]) {
        url.searchParams.set("goal", selectedGoals[0]);
      } else {
        url.searchParams.delete("goal");
      }
      setShareUrl(url.toString());
    } catch {
      setShareUrl("");
    }
  }, [
    activeTabState,
    exploredTabs,
    isDarkMode,
    isGuideVisible,
    selectedGoals,
    selectedIndustry,
    selectedRole,
    simulationsRun,
  ]);

  const setSelectedIndustry = useCallback((industry: IndustryKey) => {
    setSelectedIndustryState(industry);
    setActiveTabState("overview");
    setExploredTabs(["overview"]);
  }, []);

  const setActiveTab = useCallback((tab: DemoTabKey) => {
    setActiveTabState(tab);
    setExploredTabs((current) => (current.includes(tab) ? current : [...current, tab]));
  }, []);

  const toggleGoal = useCallback((goal: GoalKey) => {
    setSelectedGoalsState((current) => {
      if (current.includes(goal)) {
        return current.filter((item) => item !== goal);
      }
      return [...current, goal].slice(-2);
    });
  }, []);

  const setSelectedGoals = useCallback((goals: GoalKey[]) => {
    setSelectedGoalsState(goals.filter((goal) => isGoal(goal)).slice(0, 2));
  }, []);

  const markSimulationRun = useCallback((simulation: string) => {
    setSimulationsRun((current) => (current.includes(simulation) ? current : [...current, simulation]));
  }, []);

  const resetDemo = useCallback(() => {
    setSelectedIndustryState(defaultIndustryKey);
    setSelectedGoalsState([]);
    setActiveTabState("overview");
    setExploredTabs(["overview"]);
    setSimulationsRun([]);
    setSelectedRole("Business Owner");
    setIsGuideVisible(true);
    try {
      window.sessionStorage.removeItem(storageKey);
      window.history.replaceState(null, "", window.location.pathname);
    } catch {
      // Browser storage is optional for the demo.
    }
  }, []);

  const demoData = industryData[selectedIndustry];
  const highlightedTabs = useMemo(
    () => goalOptions.filter((goal) => selectedGoals.includes(goal.key)).map((goal) => goal.tab),
    [selectedGoals],
  );

  const value = useMemo(
    () => ({
      selectedIndustry,
      setSelectedIndustry,
      selectedGoals,
      toggleGoal,
      setSelectedGoals,
      activeTab: activeTabState,
      setActiveTab,
      exploredTabs,
      simulationsRun,
      markSimulationRun,
      isGuideVisible,
      setIsGuideVisible,
      selectedRole,
      setSelectedRole,
      isDarkMode,
      setIsDarkMode,
      demoData,
      resetDemo,
      shareUrl,
      highlightedTabs,
    }),
    [
      activeTabState,
      demoData,
      exploredTabs,
      highlightedTabs,
      isDarkMode,
      isGuideVisible,
      markSimulationRun,
      resetDemo,
      selectedGoals,
      selectedIndustry,
      selectedRole,
      setActiveTab,
      setSelectedGoals,
      setSelectedIndustry,
      shareUrl,
      simulationsRun,
      toggleGoal,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
}

export function useDemo() {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error("useDemo must be used inside DemoProvider");
  }
  return context;
}
