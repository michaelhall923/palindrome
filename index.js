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
    const lettersRegEx = /[a-z]/gi;
    return (this.content.match(lettersRegEx) || []).join("");
  }

  this.palindrome = function() {
    return this.processedContent() && this.processedContent() === this.processedContent().reverse();
  }
}
