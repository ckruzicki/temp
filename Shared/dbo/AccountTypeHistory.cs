namespace TanglewoodCandleCo.Shared.dbo;

public partial class AccountTypeHistory
{
    public int Id { get; set; }

    public int RecordId { get; set; }

    public char ActionType { get; set; }

    public string Field { get; set; } = null!;

    public string Value { get; set; } = null!;

    public DateTime? DatePrev { get; set; }

    public string? PrevBy { get; set; }

    public string? SysNotes { get; set; }

    public DateTime DateCreated { get; set; }
}
