using TourAPI.Models;

namespace TourAPI.DataSeeds
{
    public static class Seed
    {
        public static List<Tour> Tours = new List<Tour>()
        {
            // Thailand
            new Tour()
            {
                Id = 1,
                Image = "../images/savoey.png",
                Type = "Food & Markets",
                Title = "Savoey Seafood Restaurant",
                Duration = "0-3 hours",
                Cost = "$25.00",
                Reviews = 320,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 2,
                Image = "../images/railay.png",
                Type = "Beaches & Relaxation",
                Title = "Railay Beach",
                Duration = "Full day (7+ hours)",
                Cost = "$10.00",
                Reviews = 450,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 3,
                Image = "../images/elephJung.png",
                Type = "Adventure",
                Title = "Elephant Jungle Sanctuary Phuket",
                Duration = "3-5 hours",
                Cost = "$80.00",
                Reviews = 600,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 4,
                Image = "../images/watArun.png",
                Type = "Culture & Temples",
                Title = "Wat Arun",
                Duration = "0-3 hours",
                Cost = "$5.00",
                Reviews = 700,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 5,
                Image = "../images/phangNga.jpg",
                Type = "Beaches & Relaxation",
                Title = "Phang Nga Bay Kayaking",
                Duration = "5-7 hours",
                Cost = "$50.00",
                Reviews = 380,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 6,
                Image = "../images/khaoSok.jpg",
                Type = "Nature & Wildlife",
                Title = "Khao Sok National Park",
                Duration = "Multi-day",
                Cost = "$100.00",
                Reviews = 250,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 7,
                Image = "../images/erawan.jpg",
                Type = "Hidden Gems",
                Title = "Erawan Waterfalls",
                Duration = "Full day (7+ hours)",
                Cost = "$15.00",
                Reviews = 300,
                Destination = "Thailand"
            },
            new Tour()
            {
                Id = 8,
                Image = "../images/chatuchak.jpg",
                Type = "Food & Markets",
                Title = "Chatuchak Weekend Market",
                Duration = "3-5 hours",
                Cost = "$10.00",
                Reviews = 500,
                Destination = "Thailand"
            },

            // Bali
            new Tour()
            {
                Id = 9,
                Image = "../images/nusaDua.jpg",
                Type = "Beaches & Relaxation",
                Title = "Nusa Dua Beach",
                Duration = "Full day (7+ hours)",
                Cost = "$15.00",
                Reviews = 380,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 10,
                Image = "../images/locavore.jpg",
                Type = "Food & Markets",
                Title = "Locavore NXT Ubud",
                Duration = "3-5 hours",
                Cost = "$120.00",
                Reviews = 250,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 11,
                Image = "../images/uluwatu.jpg",
                Type = "Culture & Temples",
                Title = "Uluwatu Temple",
                Duration = "0-3 hours",
                Cost = "$5.00",
                Reviews = 520,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 12,
                Image = "../images/batur.jpg",
                Type = "Adventure",
                Title = "Mount Batur Sunrise Trek",
                Duration = "5-7 hours",
                Cost = "$40.00",
                Reviews = 450,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 13,
                Image = "../images/sanur.jpg",
                Type = "Beaches & Relaxation",
                Title = "Sanur Beach Snorkeling",
                Duration = "3-5 hours",
                Cost = "$30.00",
                Reviews = 300,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 14,
                Image = "../images/ubud.jpg",
                Type = "Nature & Wildlife",
                Title = "Ubud Monkey Forest",
                Duration = "0-3 hours",
                Cost = "$10.00",
                Reviews = 600,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 15,
                Image = "../images/sekumpul.jpg",
                Type = "Hidden Gems",
                Title = "Sekumpul Waterfall",
                Duration = "Full day (7+ hours)",
                Cost = "$20.00",
                Reviews = 200,
                Destination = "Bali"
            },
            new Tour()
            {
                Id = 16,
                Image = "../images/jimbaran.jpg",
                Type = "Beaches & Relaxation",
                Title = "Jimbaran Bay",
                Duration = "Full day (7+ hours)",
                Cost = "$15.00",
                Reviews = 350,
                Destination = "Bali"
            },

            // Madagascar
            new Tour()
            {
                Id = 17,
                Image = "../images/bemaraha.jpg",
                Type = "Nature & Wildlife",
                Title = "Tsingy de Bemaraha National Park",
                Duration = "Full day (7+ hours)",
                Cost = "$40.00",
                Reviews = 180,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 18,
                Image = "../images/nosyBe.jpg",
                Type = "Beaches & Relaxation",
                Title = "Nosy Be Island",
                Duration = "Multi-day",
                Cost = "$50.00",
                Reviews = 300,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 19,
                Image = "../images/Andringitra.jpg",
                Type = "Adventure",
                Title = "Andringitra National Park Trek",
                Duration = "Multi-day",
                Cost = "$70.00",
                Reviews = 150,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 20,
                Image = "../images/avenue.jpg",
                Type = "Nature & Wildlife",
                Title = "Avenue of the Baobabs",
                Duration = "0-3 hours",
                Cost = "$5.00",
                Reviews = 400,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 21,
                Image = "../images/sainteMarie.jpg",
                Type = "Beaches & Relaxation",
                Title = "Sainte Marie Island Whale Watching",
                Duration = "3-5 hours",
                Cost = "$60.00",
                Reviews = 220,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 22,
                Image = "../images/isalo.jpg",
                Type = "Hidden Gems",
                Title = "Isalo National Park",
                Duration = "Full day (7+ hours)",
                Cost = "$35.00",
                Reviews = 250,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 23,
                Image = "../images/ifaty.jpg",
                Type = "Beaches & Relaxation",
                Title = "Ifaty Beach",
                Duration = "Full day (7+ hours)",
                Cost = "$20.00",
                Reviews = 180,
                Destination = "Madagascar"
            },
            new Tour()
            {
                Id = 24,
                Image = "../images/Ranomafana.jpg",
                Type = "Nature & Wildlife",
                Title = "Ranomafana National Park",
                Duration = "5-7 hours",
                Cost = "$45.00",
                Reviews = 200,
                Destination = "Madagascar"
            }
        };
    }
}
