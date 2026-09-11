const root = ReactDOM.createRoot(document.getElementById("root"));

const ChildComponent = ({ user }) => {
    console.log(user.name, user.email, user.section);

    return (
        <div>
            <h1>
                Hello {user.name} {user.email} {user.section}
            </h1>
        </div>
    );
};

const ParentComponent = () => {

    let students = [
        { name: "Jessalyn Sandercroft", email: "jsandercroft0@stumbleupon.com", section: "CSE-18" },
        { name: "Tedi Cockett", email: "tcockett1@blinklist.com", section: "CSE-18" },
        { name: "Catina Trude", email: "ctrude2@github.com", section: "CSE-18" },
        { name: "Alison Dandison", email: "adandison3@alexa.com", section: "CSE-18" },
        { name: "Leisha Priddis", email: "lpriddis4@printfriendly.com", section: "CSE-18" },
        { name: "Weider Sundin", email: "wsundin5@livejournal.com", section: "CSE-18" },
        { name: "Murray Agirre", email: "magirre6@ustream.tv", section: "CSE-18" },
        { name: "Andrei Germann", email: "agermann7@oracle.com", section: "CSE-18" },
        { name: "Doy Campione", email: "dcampione8@networksolutions.com", section: "CSE-18" },
        { name: "Ruddie Fransoni", email: "rfransoni9@mozilla.org", section: "CSE-18" },
        { name: "Pearla Ottosen", email: "pottosena@gizmodo.com", section: "CSE-18" },
        { name: "Emyle Rummins", email: "erumminsb@yelp.com", section: "CSE-18" },
        { name: "Salvidor Stych", email: "sstychc@telegraph.co.uk", section: "CSE-18" },
        { name: "Port Scripture", email: "pscriptured@mapquest.com", section: "CSE-18" },
        { name: "Fancie Blaksland", email: "fblakslande@networkadvertising.org", section: "CSE-18" },
        { name: "Elane Tomlin", email: "etomlinf@posterous.com", section: "CSE-18" },
        { name: "Caleb Filochov", email: "cfilochovg@ca.gov", section: "CSE-18" },
        { name: "Earle Sherman", email: "eshermanh@shutterfly.com", section: "CSE-18" },
        { name: "Ddene Sehorsch", email: "dsehorschi@unicef.org", section: "CSE-18" },
        { name: "Artemis Prescot", email: "aprescotj@purevolume.com", section: "CSE-18" },
        { name: "Jeffie Hansana", email: "jhansanak@youku.com", section: "CSE-18" },
        { name: "Berti Cajkler", email: "bcajklerl@bbc.co.uk", section: "CSE-18" },
        { name: "Happy Durak", email: "hdurakm@webeden.co.uk", section: "CSE-18" },
        { name: "Burton Graalman", email: "bgraalmann@cafepress.com", section: "CSE-18" },
        { name: "Booth McConachie", email: "bmcconachieo@army.mil", section: "CSE-18" },
        { name: "Rolfe Hewins", email: "rhewinsp@alexa.com", section: "CSE-18" },
        { name: "Claudianus Gummow", email: "cgummowq@mapquest.com", section: "CSE-18" },
        { name: "Hadleigh Atcock", email: "hatcockr@state.gov", section: "CSE-18" },
        { name: "Sabra Membry", email: "smembrys@house.gov", section: "CSE-18" },
        { name: "Cahra Shellsheere", email: "cshellsheeret@slideshare.net", section: "CSE-18" }
    ];

    return (
        <div>
            {students.map((student, index) => (
                <ChildComponent
                    key={index}
                    user={student}
                />
            ))}
        </div>
    );
};

root.render(<ParentComponent />);