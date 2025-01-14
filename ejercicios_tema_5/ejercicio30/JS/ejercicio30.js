function escapeHTML(text) {
  var replacements = {
    '"': "&quot;",
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
  };
  return text.replace(/[\"&<>]/g, function (match) {
    return replacements[match];
  });
}
