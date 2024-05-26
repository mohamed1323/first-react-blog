import React, { useState, useEffect } from 'react';

function BlogContext() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay for loading
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // 2000 milliseconds = 2 seconds

    // Clearing timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="BlogContext">
      {loading ? (
        <div>Loading...</div>
        
      ) : (
        <div>
          {/* Your main content */}
          <h1>Welcome to my website!</h1>
          <p>This is the main content of the page.</p>
          
        </div>
                  
      )}

    </div>
    
  );
}

export default BlogContext;


