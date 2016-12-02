def generate_palindrome(string)

  # throw the word right back out if it's already a palindrome
  if isPalindrome(string)
    return string
  end

  palindromes = []

  # if there's a palindrome at the beginning of the word, prepend letters
  i = 1
  while i < string.length
    if isPalindrome(string[0..i])
      palindromes << string.slice(i+1, string.length).reverse + string
    end
    i += 1
  end

  #if the end of the word is a palindrome, append letters
  i = 1
  while i < string.length
    if isPalindrome(string.reverse[0..i])
      palindromes << string + string.reverse.slice(i+1, string.length)
    end
    i += 1
  end

  if (palindromes != [])
    return palindromes.min_by{|palindrome| palindrome.length}
  else
    # the "regular" case: no palindrome, so append all the letters in reverse except the last one
    return string[0..string.length-2] + string.reverse
  end
end

# cheat-y palindrome ccheck helper function, using Ruby's string.reverse method
def isPalindrome(string)
  return string.reverse == string
end

puts generate_palindrome('abc')
puts generate_palindrome('raceca')
puts generate_palindrome('rr')
puts generate_palindrome('raringanna')

# The example of "raringanna" illustrates why I made this PR - the original program would have selected
# "annagniraringanna" (17 letters) as the palidrome version, while the edited program selects "raringannagnirar", which
# is shorter (16 letters) because it mirrors about the longer ending palindrome ("anna") rather than the shorter
# starting palindrome ("rar"). The new version tries to make a palindrome about both a beginning palindrome
# and an ending palindrome before returning, and then returns the shorter of the two (if both are found). If
# both versions are equal length, the first (prepend) one should be returned by min_by.
#
# N.B. This was not my original solution at all - mine was a recursive one that dealt only with the append
# case and did not even consider prepending - so my hat is off to G.S. for coming up with this! I noticed the
# edge case only in trying to understand her code and compare it with my solution.
