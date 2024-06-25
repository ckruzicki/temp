using System;
using System.Collections.Generic;

namespace TanglewoodCandleCo.Shared.dbo;

public partial class AccountType
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public bool IsActive { get; set; }

    public DateTime DateCreated { get; set; }

    public string CreatedBy { get; set; } = null!;

    public DateTime? DateUpdated { get; set; }

    public string? UpdatedBy { get; set; }
}
