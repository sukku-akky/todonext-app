import React, { useState } from "react";
import TodoForm from "./todo/TodoForm";
import styles from "./HomePage.module.css";

const HomePage = () => {
  

  return (
    
        <div className={styles.container}>
          <h1 className={styles.heading}>Welcome to Todo App</h1>
          <p className={styles.description}>
            Here you can add tasks and complete them efficiently.
          </p>
          <img
            className={styles.image}
            src="https://img.freepik.com/free-vector/software-developing-company-programmer-explore-code_90220-173.jpg?ga=GA1.1.1307465882.1729518967&semt=ais_hybrid"
            alt="task illustration"
          />
        </div>
      );

};

export default HomePage;
