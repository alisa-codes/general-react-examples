import React, { useState } from 'react';
import {IoIosArrowUp,IoIosArrowDown} from 'react-icons/io';
function Questions(){
    return(
        <div className="questions">
          <SingleQuestion question="What can I do with Hooks that I couldn’t with classes?" 
          answer="Hooks offer a powerful and expressive new way to reuse functionality between components. “Building Your Own Hooks” provides a glimpse of what’s possible. This article by a React core team member dives deeper into the new capabilities unlocked by Hooks."
          />
          <SingleQuestion question="Do I need to rewrite all my class components?"
          answer="No. There are no plans to remove classes from React — we all need to keep shipping products and can’t afford rewrites. We recommend trying Hooks in new code."/>
        </div>
    )
};

export default Questions;

export function SingleQuestion(props){
    const [answer,showAnswer] = useState(false);
    function show(){
        showAnswer(!answer);
    }
    return(
        <div onClick={show} className="single-question">
            <h3>{props.question} {answer === false ? <IoIosArrowDown /> : <IoIosArrowUp />}</h3>
            <p style={{display: answer ? "block" : "none",}} >
            {props.answer}
            </p>
        </div>
    )
};
