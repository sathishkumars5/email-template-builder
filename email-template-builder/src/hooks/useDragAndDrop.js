import { useEffect } from 'react';

// Custom hook for drag-and-drop logic
function useDragAndDrop() {
  // 1. Setup drag listeners (if using native events)
  // 2. Return helper functions like `onDragStart`, `onDrop`, etc.

  useEffect(() => {
    // Add any listeners here (if needed)

    return () => {
      // Cleanup listeners
    };
  }, []);

  // 3. Return what the component needs
  return {
    // dragStart, drop, draggedItem, etc.
  };
}

export default useDragAndDrop;
