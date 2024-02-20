namespace WebAPI_ListaFuncionarios.Models
{
    public class ServiceResponse<T>
    {
        public T? MyProperty { get; set; }
        public String Mensagem { get; set; } = string.Empty;
        public bool Sucesso { get; set; }
    }
}
