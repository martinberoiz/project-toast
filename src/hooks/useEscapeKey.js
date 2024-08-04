import React from 'react'

function useEscapeKey(action) {
    function ifEscape(e) {
        if (e.code === 'Escape') {
            action();
        }
    }
    React.useEffect(() => {
    window.addEventListener("keypress", ifEscape);

    return () => {
      window.removeEventListener("keypress", ifEscape);
    };
  }, []);

}

export default useEscapeKey;
