def dan_and_kari(string)
  string.downcase!

  stack = []
  i = 0
  while i < string.length
    if string[i..(i+2)] == "dan"
      stack << "item"
    end
    if string[i..(i+3)] == 'kari'
      stack.pop
    end
    i += 1
  end

  return stack.empty?

end

puts dan_and_kari ("Dan really like’s Kari’s dog, but Jamie adores Kari’s Dog")
