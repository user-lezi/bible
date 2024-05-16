// LZW Compression
export function compress(text: string): string {
  let dic: { [key: string]: number } = {}
  let index = 256
  for (let i = 0; i < index; i++) {
    dic[String.fromCharCode(i)] = i
  }
  let result: number[] = []
  let current = text[0]
  for (let i = 0; i < text.length; i++) {
    let char = text[i]
    let next = current + char
    if (dic[next]) {
      current = next
    } else {
      result.push(dic[current])
      dic[next] = index
      index++
      current = char
    }
  }
  result.push(dic[current])

  return result.map((x: number) => x.toString(36)).join(" ")
}

export function decompress(text: string): string {
  let dic: { [key: number]: string } = {}
  let index = 256
  for (let i = 0; i < index; i++) {
    dic[i] = String.fromCharCode(i)
  }
  let compressed: number[] = text.split(" ").map((n: string) => parseInt(n, 36))

  let result = ""
  let w = dic[compressed[0]]
  let entry = ""
  for (let i = 1; i < compressed.length; i++) {
    let k = compressed[i]
    if (dic[k]) {
      entry = dic[k]
    } else {
      if (k === index) {
        entry = w + w.charAt(0)
      } else {
        return ""
      }
    }
    result += entry
    // add new string
    dic[index] = w + entry.charAt(0)
    index++
    w = entry
  }
  return result
}
