using System;
using System.Collections.Generic;

namespace TanglewoodCandleCo.Shared.dbo;

public partial class Recordtype
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public bool IsActive { get; set; }

    public int? ParentId { get; set; }

    public DateTime DateCreated { get; set; }

    public string CreatedBy { get; set; } = null!;

    public string? SysNotes { get; set; }

    public virtual ICollection<Account> Account { get; set; } = new List<Account>();

    public virtual ICollection<Recordtype> InverseParent { get; set; } = new List<Recordtype>();

    public virtual Recordtype? Parent { get; set; }
}
