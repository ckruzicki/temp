using System.ComponentModel.DataAnnotations;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;

public class AccountTypeViewModel
{
    public int Id { get; set; }

    [Required(ErrorMessage = "The AccountType name is required")]
    public string Name { get; set; }
    public bool IsActive { get; set; } = true;
    public ActionType ActionType { get; set; }

    public AccountTypeViewModel MapToVm(AccountType ac)
    {
        return new AccountTypeViewModel
        {
            Id = ac.Id, // > 0 ? ac.Id : null,
            Name = ac.Name,
            IsActive = ac.IsActive
        };
    }
    public AccountType MapToDto()
    {
        var t = new AccountType();
        return new AccountType()
        {
            Id = Id,
            Name = Name,
            IsActive = IsActive,
        };
    }
}
