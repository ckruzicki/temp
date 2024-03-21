using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.QuickGrid;
using System;
using TanglewoodCandleCo.Wasm.Client.Components;

namespace TanglewoodCandleCo.Wasm.Client.Pages.Purchases
{
    
    public partial class Purchases : ComponentBase
    {
        QuickGrid<Person>? personGrid;
        string nameSearch;
        GridSort<Person> marketingEndSort = GridSort<Person>.ByAscending(x => x.PromotionDate);

        int numResults;
        public record Person(int PersonId, string Name, DateOnly PromotionDate);
        private IQueryable<Person> people = new[]
          {
            new Person(10895, "Jean Martin", new DateOnly(1985, 3, 16)),
            new Person(10944, "António Langa", new DateOnly(1991, 12, 1)),
            new Person(11203, "Julie Smith", new DateOnly(1958, 10, 10)),
            new Person(11205, "Nur Sari", new DateOnly(1922, 4, 27)),
            new Person(11898, "Jose Hernandez", new DateOnly(2011, 5, 3)),
            new Person(12130, "Kenji Sato", new DateOnly(2004, 1, 9)),
        }.AsQueryable();

        protected override void OnInitialized()
        {
            //SearchBox s = new Components.SearchBox();
        }
    }
}
