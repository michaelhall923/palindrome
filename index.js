String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processedContent = function() {
    return this.content.toLowerCase();
  }

  this.palindrome = function() {
    return this.processedContent() === reverse(this.processedContent());
  };
}
