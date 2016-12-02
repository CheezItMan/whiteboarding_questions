def dan_and_kari(string)
  string.downcase!

  stack = 0
  i = 0
  while i < string.length
    if string[i..(i+2)] == "dan"
      stack += 1
    end
    if string[i..(i+3)] == 'kari'
      stack -= 1
    end
    i += 1
  end

  return stack == 0

end

puts dan_and_kari ("Dan really like’s Kari’s dog, but Jamie adores Kari’s Dog")
puts dan_and_kari ('')
