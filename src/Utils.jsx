export function showStatus(step, index) {
    setTimeout(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'  // 平滑捲動
        });
    }, 100);
    return step >= index ? "show" : "hidden";
}