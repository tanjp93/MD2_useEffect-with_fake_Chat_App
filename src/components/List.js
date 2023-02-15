import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const lesson = [
    { id: 1, name: "React Js là gì? " },
    { id: 2, name: "SPA là gì? " },
    { id: 3, name: "Arrow funtion " }
]

const List = () => {
    const [lessonId, setLessonId] = useState(lesson.id)
    useEffect(() => {
        const handleCommnet = ({detail}) => {
            console.log(detail);
        }
        window.addEventListener(`Lesson -${lessonId}`, handleCommnet)
        return ()=> {window.removeEventListener(`Lesson -${lessonId}`, handleCommnet)}
    },[lessonId])


    return (
        <ul>
            {lesson.map(
                (lesson) => (
                    <li key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? "red" :
                                "#333"
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >{lesson.name}</li>
                ))}
        </ul>
    );
}

export default List;
