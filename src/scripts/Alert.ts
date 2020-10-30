interface Props {
  message: string
}

async function Alert({ message }: Props) {
  alert(`Alert!!! \n\n ${message}`)
}

export default Alert