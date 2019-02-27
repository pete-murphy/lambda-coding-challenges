let sumOfDigits = (num: int): int =>
  num
  |> string_of_int
  |> Js.String.split("")
  |> Js.Array.map(int_of_string)
  |> Js.Array.reduce((+), 0);