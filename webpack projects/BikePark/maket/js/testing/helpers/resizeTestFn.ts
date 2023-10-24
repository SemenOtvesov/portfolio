export default function resize(newWidth: number){
    Object.defineProperties(window.HTMLElement.prototype, {
        offsetWidth: {
            get: function() { return newWidth}
        }
    });
}