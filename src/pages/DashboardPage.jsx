  // DashboardPage.jsx
  // TODO: This file is getting really long... but it works so let's not touch it 🙃

  import { useState } from "react";
  import DashboardHeader from "../components/dashboard/DashboardHeader";
  import AddTaskInput from "../components/dashboard/AddTaskInput";
  import TaskFilterBar from "../components/dashboard/TaskFilterBar";
  import TaskItem from "../components/shared/TaskItem";
  import StatCard from "../components/shared/StatCard";
  import StatsRow from "../components/dashboard/StatsRow";
  import TaskList from "../components/dashboard/TaskList";
  import tasks from "../data/tasks";

  export default function DashboardPage() {
    const [taskList, setTaskList] = useState(tasks);
    const [newTask, setNewTask] = useState("");
    const [filter, setFilter] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const addTask = () => {
      if (!newTask.trim()) return;
      setTaskList([
        ...taskList,
        {
          id: Date.now(),
          title: newTask,
          completed: false,
          priority: "medium",
          tag: "general",
          createdAt: new Date().toISOString(),
        },
      ]);
      setNewTask("");

    const completedCount = taskList.filter((t) => t.completed).length;
    const totalCount = taskList.length;
    const progressPercent = totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

    return (
      <div style={{ minHeight: "100vh", background: "#0f0f1a", color: "#e2e8f0", fontFamily: "sans-serif" }}>
        {/* ===== HEADER ===== */}
        <DashboardHeader />
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 24px" }}>

          {/* ===== STATS CARDS ===== */}
          <StatsRow
            totalCount={totalCount}
            completedCount={completedCount}
            progressPercent={progressPercent}
          />

          {/* ===== ADD TASK INPUT ===== */}
          <AddTaskInput
            newTask={newTask}
            setNewTask={setNewTask}
            addTask={addTask}
          />

          {/* ===== FILTER + SEARCH ===== */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, gap: 12 }}>
            <div style={{ display: "flex", gap: 8 }}>
              {["all", "active", "completed"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  style={{ padding: "6px 16px", borderRadius: 8, border: "1px solid", borderColor: filter === f ? "#6366f1" : "#2d2d44", background: filter === f ? "rgba(99,102,241,0.15)" : "transparent", color: filter === f ? "#a78bfa" : "#64748b", fontSize: 13, fontWeight: 500, cursor: "pointer", textTransform: "capitalize" }}
                >
                  {f}
                </button>
              ))}
            </div>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tasks..."
              style={{ background: "#1a1a2e", border: "1px solid #2d2d44", borderRadius: 10, padding: "8px 14px", color: "#e2e8f0", fontSize: 13, outline: "none", width: 200 }}
            />
          </div>

          {/* ===== TASK LIST ===== */}
          <TaskList
            tasks={filtered}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

        </div>
      </div>
    );
  }
