// Web Worker for processing searches and filters off the main UI thread (Multithreading)
self.onmessage = (e: MessageEvent) => {
  const { action, payload } = e.data;
  const startTime = performance.now();

  if (action === "FILTER_BLOGS") {
    const { posts, query, category } = payload;
    const filtered = posts.filter((post: any) => {
      const matchesCategory = category === "All Posts" || post.category === category;
      const matchesSearch =
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        (post.tags && post.tags.some((tag: string) => tag.toLowerCase().includes(query.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
    
    // Simulate slight workload or process items
    const endTime = performance.now();
    self.postMessage({
      action: "FILTER_BLOGS_SUCCESS",
      payload: {
        results: filtered,
        timeTakenMs: Number((endTime - startTime).toFixed(3)),
        threadId: Math.floor(Math.random() * 8) + 1 // Simulated thread ID for visual feedback
      }
    });
  } else if (action === "FILTER_TESTIMONIALS") {
    const { reviews, category } = payload;
    const filtered = category === "All"
      ? reviews
      : reviews.filter((r: any) => r.category && r.category.toLowerCase() === category.toLowerCase());
      
    const endTime = performance.now();
    self.postMessage({
      action: "FILTER_TESTIMONIALS_SUCCESS",
      payload: {
        results: filtered,
        timeTakenMs: Number((endTime - startTime).toFixed(3)),
        threadId: Math.floor(Math.random() * 8) + 1
      }
    });
  }
};
