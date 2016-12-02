# Wrote this one in class with Olivia.

def flatten(array)
  return_array = []
  array.each do |x|
    # only accept values that are neither nil nor arrays themselves
    if x != nil && x.class != Array
      return_array << x
    elsif x.class == Array
      # call flatten again! RECURSION!!!!
      flatten(x).each do |i|
        return_array << i
      end
    end
  end
  return return_array
end

print flatten([1,2, nil,[3,[4, nil, [nil],5],6],7])
