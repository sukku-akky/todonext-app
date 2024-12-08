import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link href="/todos">Todos</Link>
          </li>

          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/completed-todos">Tasks Accomplished</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
