def generate_palindrome(string)

  # throw the word right back out if it's already a palindrome
  if isPalindrome(string)
    return string
  end

  # if there's a palindrome at the beginning of the word, prepend letters
  i = 1
  while i < string.length
    if isPalindrome(string[0..i])
      return string.slice(i+1, string.length).reverse + string
    end
    i += 1
  end

  #if the end of the word is a palindrome, append letters
  i = 1
  while i < string.length
    if isPalindrome(string.reverse[0..i])
      return string + string.reverse.slice(i+1, string.length)
    end
    i += 1
  end

  # the "regular" case: no palindrome, so append all the letters in reverse except the last one
  return string[0..string.length-2] + string.reverse
end

# cheat-y palindrome ccheck helper function, using Ruby's string.reverse method
def isPalindrome(string)
  return string.reverse == string
end

puts generate_palindrome('abc')
puts generate_palindrome('racecar')
puts generate_palindrome('rr')
puts generate_palindrome('raring')
