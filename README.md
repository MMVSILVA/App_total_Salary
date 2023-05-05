# App_total_Salary
Criação de um app para listar as informações de salários e totais dos funcionários, utilizando um array com informações dos funcionários.Uso da função reduce para fazer a soma dos valores e FlatList para iterar neste array e listar os dados.
Crie um app para listar as informações de salários e totais dos funcionários. Crie um array com as seguintes informações
O App deverá exibir na parte superior o total de salários do Dev Junior, Dev Pleno e Dev Senior. Utilize a função reduce para fazer a soma dos valores
Na parte inferior deverá listar nome, função, salário. Crie um componente para receber os dados a serem listados. Utilize a FlatList para iterar neste array e listar os dados.

export function Home() {
  const participants = [
    
    { id: '202301', name: 'Ana',occupation:'Dev Junior', salary: 2500.00 },
    { id: '202302', name: 'Maria',occupation:'Dev Pleno', salary: 4500.00 },
    { id: '202303', name: 'Rosa',occupation:'Dev Senior', salary: 6500.00 },
    { id: '202304', name: 'Jose',occupation:'Dev Pleno', salary: 4500.00 },
    { id: '202305', name: 'Mateus',occupation:'Dev Junior', salary: 2500.00 },
    { id: '202306', name: 'Ricardo',occupation:'Dev Senior', salary: 6500.00 },
    { id: '202307', name: 'Márcio',occupation:'Dev Junior', salary: 2500.00 },
    
  ]
  
  OBS: TODOS OS DADOS DA ARRAY dados fictícios.
