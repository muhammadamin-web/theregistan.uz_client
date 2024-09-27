import React from 'react';
import { useEffect, useRef } from 'react';

export const TelegramPost = ({ postId }: { postId: string }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) return;
        
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://telegram.org/js/telegram-widget.js?22';
        script.setAttribute('data-telegram-post', postId);
        script.setAttribute('data-width', '100%');

        ref.current.appendChild(script);

        return () => {
            // O'chirish uchun scriptni olib tashlash
            if (ref.current) {
                ref.current.innerHTML = '';
            }
        };
    }, [postId]);

    return <div ref={ref} />;
};
