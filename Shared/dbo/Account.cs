using System;
using System.Collections.Generic;

namespace TanglewoodCandleCo.Shared.dbo;

public partial class Account
{
    public int Id { get; set; }

    public string? Fullname { get; set; }

    public string LastName { get; set; } = null!;

    public string? FirstName { get; set; }

    public bool IsActive { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public string? Mobile { get; set; }

    public string? Fax { get; set; }

    public string? Other { get; set; }

    public string? Website { get; set; }

    public string? Address1 { get; set; }

    public string? Address2 { get; set; }

    public string? City { get; set; }

    public int? StateOrProvinceId { get; set; }

    public string? PostalCode { get; set; }

    public int? CountryId { get; set; }

    public int? SalutationId { get; set; }

    public int? SuffixId { get; set; }

    public string? Notes { get; set; }

    public DateTime DateCreated { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime? DateUpdated { get; set; }

    public string? UpdatedBy { get; set; }

    public int RecordtypeId { get; set; }

    public virtual Recordtype Recordtype { get; set; } = null!;
}
