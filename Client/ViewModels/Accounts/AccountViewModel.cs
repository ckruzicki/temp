using System.ComponentModel.DataAnnotations;
using TanglewoodCandleCo.Shared.dbo;
using TanglewoodCandleCo.Wasm.Shared;

namespace TanglewoodCandleCo.Wasm.Client.ViewModels.Accounts;

public class AccountViewModel
{
    public int Id { get; set; }
    public RecordType RecordType { get; set; } // For Operations
    public Recordtype Recordtype { get; set; } // For Saving
    public int RecordtypeId { get; set; } // Id

    [Required(ErrorMessage = "The First Name is required")]
    public string FirstName { get; set; }
    
    [Required(ErrorMessage = "The Last Name is required")]
    public string LastName { get; set; }
    public string Fullname { get; set; }
    public bool IsActive { get; set; } = true;
    public ActionType ActionType { get; set; }
    public string SalutationId { get; set; }
    public string SuffixId { get; set; }
    public string Email { get; set; }
    public string Phone { get; set; }
    public string Modile { get; set; }
    public string Fax { get; set; }
    public string Other { get; set; }
    public string Website { get; set; }
    public string Address1 { get; set; }
    public string Address2 { get; set; }
    public string City { get; set; }
    public string StateOrProvinceId { get; set; }
    public string PostalCode { get; set; }
    public string CountryId { get; set; }
    public string Notes { get; set; }

    public AccountViewModel MapToVm(Account acct)
    {
        return new AccountViewModel
        {
            Id = acct.Id,
            RecordtypeId = acct.RecordtypeId,
            FirstName = acct.FirstName,
            LastName = acct.LastName,
            Fullname = acct.Fullname,
            Email = acct.Email,
            Website = acct.Website,
            Address1 = acct.Address1,
            Address2 = acct.Address2,
            City = acct.City,
            PostalCode = acct.PostalCode,
            Notes = acct.Notes,
            IsActive = acct.IsActive
        };
    }
    public Account MapToDto()
    {
        return new Account()
        {
            Id = Id,
            RecordtypeId = Recordtype.Id,
            Recordtype = Recordtype,
            //SalutationId = SalutationId,
            //Recordtype = new Recordtype() { Id  = t.Id },
            FirstName = FirstName,
            LastName = LastName,
            //SuffixId = SuffixId,
            Fullname = Fullname,
            Email = Email,
            Address1 = Address1,
            Address2 = Address2,
            City = City,
            //StateOrProvinceId = StateOrProvinceId,
            PostalCode = PostalCode,
            // CountryId = CountryId,
            CreatedBy = "Unset",
            IsActive = IsActive,
            Notes = Notes,
        }; 
    }
}
