using Microsoft.EntityFrameworkCore;
using WebAPI_ListaFuncionarios.Models;

namespace WebAPI_ListaFuncionarios.DataContext
{
    public class ApplicationDbContext :DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<FuncionarioModel> Funcionarios { get; set; }
    }
}
