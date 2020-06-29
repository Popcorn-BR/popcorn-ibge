export async function http<T>(
  endpoint: string
): Promise<T> {
  const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/${endpoint}`);
  const body = await response.json();
  return body;
}