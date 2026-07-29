import { useState, useEffect } from "react";

export default function Footer() {

    const [seconds, setSeconds] = useState(0);
    
    useEffect(() => {
        const secondsCounter = setInterval(() => setSeconds(s => s + 1), 1000);
        return () => clearInterval(secondsCounter);
    }, []);

    return(
        <footer className="flex items-center justify-between border-t border-grey-primary py-4 px-6 text-xs text-grey-primary">
            <div className="flex gap-4">
                <span className="uppercase tracking-[2px]">SYNCED</span>
                <span>last sync · {seconds}s ago</span>
                <span>storage · local + cloud</span>
            </div>
            <div className="flex gap-4">
                <span>BW 84.2 kg · -0.8 kg / 30d</span>
                <span className="text-text-secondary">REPS // 0.1-beta_</span>
            </div>
        </footer>
    )
};