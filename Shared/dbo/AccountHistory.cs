using System;
using System.Collections.Generic;

namespace TanglewoodCandleCo.Shared.dbo;

public partial class AccountHistory
{
    public int Id { get; set; }

    public int RecordId { get; set; }

    public char ActionType { get; set; }

    public string Audits { get; set; } = null!;

    public DateTime? DatePrev { get; set; }

    public string? PrevBy { get; set; }

    public string? SysNotes { get; set; }

    public DateTime DateCreated { get; set; }
}
