"use client"
import React, { useState } from "react";
import "./GoogleInterviewPage.css"; // External CSS

const GoogleInterviewPage = () => {
  const companyName = "Google";

  const questions = [
    {
      question: "Explain the difference between a process and a thread.",
      answer:
        "A process is an independent program with its own memory space, while a thread is a lightweight subprocess that shares memory with other threads in the same process."
    },
    {
      question: "How does garbage collection work in Java?",
      answer:
        "Garbage collection automatically frees memory by destroying unreachable objects using various algorithms like mark-and-sweep."
    },
    {
      question: "What is a race condition? How can it be avoided?",
      answer:
        "A race condition occurs when multiple threads access shared data and try to change it at the same time. It can be avoided using synchronization techniques like locks or semaphores."
    },
    {
      question: "Describe the concept of dynamic programming with an example.",
      answer:
        "Dynamic programming solves problems by breaking them into subproblems and storing results to avoid recomputation. Example: Fibonacci sequence with memoization."
    },
    {
      question: "How does a HashMap work internally in Java?",
      answer:
        "HashMap stores key-value pairs. It uses hashing to compute index and handles collisions using linked lists or trees (after Java 8)."
    }
    // Add more as needed...
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="interview-container">
      <h1 className="title">Interview Questions - {companyName}</h1>
      <ol className="question-list">
        {questions.map((item, index) => (
          <li key={index} className="question-item">
            <div
              className="question"
              onClick={() => toggleAnswer(index)}
              role="button"
              tabIndex={0}
            >
              {index + 1}. {item.question}
            </div>
            {activeIndex === index && (
              <div className="answer">{item.answer}</div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default GoogleInterviewPage;
