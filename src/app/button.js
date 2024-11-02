"use client"
import React, { useState } from 'react';

export default function Button() {
    const [GPA, setGPA] = useState(0);
    const [GPAContent, setGPAContent] = useState('Your GPA will appear here');

    function calculate() {
        const grades = {
            "A": 4,
            "A-": 4,
            "A+":4,
            "B+": 3.3,
            "B": 3,
            "B-": 2.7,
            "C+": 2.5,
            "C": 2,
            "C-": 1.7,
            "D+": 1.5,
            "D": 1,
            "D-": 0.5,
            "N": 0
        };

        let totalGradePoints = 0;
        let validGrades = 0;

        for (let i = 0; i < 7; i++) {
            const box = document.getElementById(i);
            if (box && (box.value in grades).toUpperscase()) {
                totalGradePoints += grades[box.value];
                validGrades++;
            }
        }

        if (validGrades > 0) {
            const calculatedGPA = totalGradePoints / validGrades;
            const roundedGPA = Math.round(calculatedGPA * 100) / 100;
            setGPA(roundedGPA);
            setGPAContent(`Your GPA is: ${roundedGPA}`);
        } else {
            setGPAContent('Please enter valid grades');
        }
    }

    return (
        <div className="w-full">
            <p className="underline">{GPAContent}</p>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full" onClick={calculate}>
                Calculate GPA!
            </button>
        </div>
    );
}