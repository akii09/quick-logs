export const Log = (msg) => {
  return (
    <div class="ql-draggable-container">
        <div class="ql-window-controls">
            {/* <!-- Add Windows icons for close and minimize buttons --> */}
            <div class="ql-windows-close" onclick="closeWindow()"></div>
            <div class="ql-windows-minimize" onclick="minimizeWindow()"></div>
        </div>
        <div class="ql-resizable-content">
            {/* <!-- The content you want to make resizable should be here --> */}
            <div class="ql-dark-logger-container">
                <p>{msg}</p>
            </div>
            <div class="ql-dark-logger-action"></div>
        </div>
        {/* <!-- <div class="ql-resize-handle"></div> --> */}
    </div>
  );
};