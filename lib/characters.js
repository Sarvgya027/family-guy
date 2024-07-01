import { endpoint } from '@/utils/endpoint'

export async function getAllCharacters() {
  const data = await fetch(`http://localhost:3000/api/characters`)

  if (!data.ok) {
    throw new Error('Failed to fetch data')
  }
  // console.log(data)
  return data.json()
}

export async function getCharacterBySlug() {}
