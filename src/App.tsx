import React, { useEffect, useState } from "react";
import {
  saveTotal,
  loadTotal,
  saveHistory,
  loadHistory,
  clearHistory,
} from "./storage";
import "./App.css";

type Screen = "main" | "history";

function App() {
  const [screen, setScreen] = useState<Screen>("main");
  const [total, setTotal] = useState(0);
  const [history, setHistory] = useState<string[]>([]);
  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setTotal(await loadTotal());
      setHistory(await loadHistory());
    };
    fetchData();
  }, []);

  const addWater = async (amount: number) => {
    const newTotal = total + amount;
    setTotal(newTotal);
    await saveTotal(newTotal);

    const timestamp = new Date().toLocaleString();
    const newItem = `${timestamp} +${amount}ml`;

    const updated = [...history, newItem];
    setHistory(updated);
    await saveHistory(updated);

    // Rung nhẹ (Android)
    if (navigator.vibrate) navigator.vibrate(80);
  };

  const deleteAllHistory = async () => {
    await clearHistory();
    setHistory([]);
    setShowConfirm(false);
  };

  if (screen === "history") {
    return (
      <div className="container">
        <h1 className="title">Lịch sử uống nước</h1>

        {history.length === 0 ? (
          <p className="empty">Chưa có lịch sử</p>
        ) : (
          history.map((item, i) => (
            <div className="history-item" key={i}>
              {item}
            </div>
          ))
        )}

        <button className="btn delete" onClick={() => setShowConfirm(true)}>
          🗑 Xóa lịch sử
        </button>

        <button className="btn back" onClick={() => setScreen("main")}>
          ← Quay lại
        </button>

        {showConfirm && (
          <div className="popup">
            <div className="popup-box">
              <h3>Bạn có chắc muốn xoá?</h3>
              <button className="popup-btn yes" onClick={deleteAllHistory}>
                Xóa
              </button>
              <button
                className="popup-btn no"
                onClick={() => setShowConfirm(false)}
              >
                Hủy
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Water Tracker</h1>

      <div className="circle">
        <span className="water-text">{total} ml</span>
      </div>

      <button className="btn add100" onClick={() => addWater(100)}>
        +100ml
      </button>

      <button className="btn add200" onClick={() => addWater(200)}>
        +200ml
      </button>

      <button className="btn add300" onClick={() => addWater(300)}>
        +300ml
      </button>

      <button className="btn history" onClick={() => setScreen("history")}>
        📜 Xem lịch sử
      </button>
    </div>
  );
}

export default App;
