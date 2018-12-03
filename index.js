module.exports = Phrase;

String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processedContent = function() {
    return this.letters().toLowerCase();
  }

  this.letters = function letters() {
    return (this.content.match(/[a-z]/ig) || []).join("");
  }

  this.palindrome = function() {
    return this.processedContent() === this.processedContent().reverse();
  }
}
