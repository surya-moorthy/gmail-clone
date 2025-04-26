import { useState } from "react";
import { EmailSection } from "./EmailSection";
import { ScrollArea } from "./ui/scroll-area";
import { Check } from "lucide-react";

export default function MainSection() {
  return (
    <div className="relative px-2 py-1  w-[80%] text-black bg-neutral-300 rounded-md dark:bg-neutral-800 dark:text-neutral-50">
      <ScrollArea className="rounded-md border p-4 bg-neutral-50 dark:bg-neutral-950">
        {emails.map((email) => {
          const date = new Date(email.receivedAt);
          const hours = date.getUTCHours().toString().padStart(2, '0');
          const minutes = date.getUTCMinutes().toString().padStart(2, '0');
          const time = `${hours}:${minutes}`;
          return (
            <Section
              key={email.id}
              sender={email.sender.split(".")[0]}
              description={email.body}
              receivedAt={time}
            />
          );
        })}
      </ScrollArea>

      <div className="absolute top-45 right-5 sm:h-full sm:w-full  lg:h-[400px] lg:w-[500px]">
        <EmailSection />
      </div>
    </div>
  );
}


const Section = ({ sender, description, receivedAt } : {sender : string,description : string , receivedAt : string}) => {
  const [checked, setChecked] = useState(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row items-center justify-between w-full py-2 px-4 border-b border-gray-200">
      <div
        onClick={toggleCheckbox}
        className="w-6 h-6 rounded border-2 border-gray-400 flex items-center justify-center cursor-pointer"
        style={{ backgroundColor: "transparent" }}
      >
        {checked && (
          <div className="w-full h-full bg-blue-500 rounded flex items-center justify-center">
            <Check size={14} color="white" />
          </div>
        )}
      </div>

      <div className="flex-1 ml-4">
        {sender}
      </div>

      <div className="flex-1">
        {description}
      </div>
      <div className="flex-1 text-right">
        {receivedAt}
      </div>
    </div>
  );
}

const emails = [
  {
    id: 1,
    sender: "alex.johnson@example.com",
    subject: "Meeting Rescheduled",
    body: "Hey, just letting you know the meeting is now at 3 PM. Let me know if that works!",
    receivedAt: "2025-04-25T10:15:00Z",
    isRead: false
  },
  {
    id: 2,
    sender: "sarah.miller@example.com",
    subject: "Project Update",
    body: "The client loved the design! Few minor tweaks needed. Details attached.",
    receivedAt: "2025-04-24T14:45:00Z",
    isRead: true
  },
  {
    id: 3,
    sender: "david.lee@example.com",
    subject: "Weekend Plans",
    body: "Thinking about going hiking this weekend. You in?",
    receivedAt: "2025-04-23T18:30:00Z",
    isRead: false
  },
  {
    id: 4,
    sender: "nina.watson@example.com",
    subject: "Invoice Reminder",
    body: "Friendly reminder: Invoice #1043 is due tomorrow. Thanks!",
    receivedAt: "2025-04-23T08:15:00Z",
    isRead: true
  },
  {
    id: 5,
    sender: "marketing@shopworld.com",
    subject: "Exclusive Offer Just for You!",
    body: "Save up to 50% on your next purchase. Limited time offer!",
    receivedAt: "2025-04-22T12:00:00Z",
    isRead: false
  },
  {
    id: 6,
    sender: "recruiter@techcorp.com",
    subject: "Job Opportunity",
    body: "We came across your profile and have an exciting opportunity at TechCorp!",
    receivedAt: "2025-04-21T09:30:00Z",
    isRead: true
  },
  {
    id: 7,
    sender: "newsletter@healthylife.com",
    subject: "5 Tips for a Healthier You",
    body: "Discover easy ways to boost your health starting today!",
    receivedAt: "2025-04-20T11:45:00Z",
    isRead: false
  },
  {
    id: 8,
    sender: "support@streamflix.com",
    subject: "Your Subscription Renewal",
    body: "Your Streamflix subscription has been renewed successfully.",
    receivedAt: "2025-04-20T06:20:00Z",
    isRead: true
  },
  {
    id: 9,
    sender: "lisa.brown@example.com",
    subject: "Dinner Plans?",
    body: "Want to grab dinner tomorrow night?",
    receivedAt: "2025-04-19T17:00:00Z",
    isRead: false
  },
  {
    id: 10,
    sender: "paul.green@example.com",
    subject: "Team Outing",
    body: "We're planning a team outing next Friday. Vote for your favorite spot!",
    receivedAt: "2025-04-19T08:55:00Z",
    isRead: true
  },
  {
    id: 11,
    sender: "alerts@bankplus.com",
    subject: "Unusual Activity Detected",
    body: "We've noticed a login from a new device. Please review.",
    receivedAt: "2025-04-18T13:40:00Z",
    isRead: false
  },
  {
    id: 12,
    sender: "emma.wilson@example.com",
    subject: "Book Recommendation",
    body: "Just finished reading 'Atomic Habits' — highly recommend!",
    receivedAt: "2025-04-18T10:10:00Z",
    isRead: true
  },
  {
    id: 13,
    sender: "travel@wanderlust.com",
    subject: "Your Dream Vacation Awaits",
    body: "Discover beautiful places and great deals for your next adventure!",
    receivedAt: "2025-04-17T16:05:00Z",
    isRead: false
  },
  {
    id: 14,
    sender: "carol.adams@example.com",
    subject: "Happy Birthday!",
    body: "Wishing you an amazing year ahead. Let's celebrate soon!",
    receivedAt: "2025-04-17T07:30:00Z",
    isRead: true
  },
  {
    id: 15,
    sender: "updates@socialzone.com",
    subject: "Your Weekly Digest",
    body: "Here's what you missed this week on SocialZone.",
    receivedAt: "2025-04-16T19:25:00Z",
    isRead: false
  },
  {
    id: 16,
    sender: "ben.turner@example.com",
    subject: "Photos from the Trip",
    body: "Sharing the amazing photos from our road trip!",
    receivedAt: "2025-04-16T11:55:00Z",
    isRead: true
  },
  {
    id: 17,
    sender: "no-reply@eventbrite.com",
    subject: "Your Ticket Confirmation",
    body: "Thanks for booking! Your event tickets are attached.",
    receivedAt: "2025-04-15T14:50:00Z",
    isRead: true
  },
  {
    id: 18,
    sender: "laura.scott@example.com",
    subject: "Catch Up Soon?",
    body: "It's been too long! Let's grab coffee next week.",
    receivedAt: "2025-04-15T09:15:00Z",
    isRead: false
  },
  {
    id: 19,
    sender: "security@onlineshop.com",
    subject: "Password Changed",
    body: "Your account password was successfully updated.",
    receivedAt: "2025-04-14T06:40:00Z",
    isRead: true
  },
  {
    id: 20,
    sender: "kevin.richards@example.com",
    subject: "Fantasy League Update",
    body: "You're leading this week's fantasy football league!",
    receivedAt: "2025-04-13T20:05:00Z",
    isRead: false
  },
  {
    id: 21,
    sender: "updates@readmore.com",
    subject: "New Articles for You",
    body: "Hand-picked articles based on your interests.",
    receivedAt: "2025-04-13T12:30:00Z",
    isRead: true
  },
  {
    id: 22,
    sender: "anna.lopez@example.com",
    subject: "Yoga Class Tomorrow",
    body: "Reminder: Yoga class at 7 AM. Bring a mat!",
    receivedAt: "2025-04-12T22:10:00Z",
    isRead: false
  },
  {
    id: 23,
    sender: "noreply@musicwave.com",
    subject: "New Playlist Recommendations",
    body: "Fresh tracks just for you — start listening now!",
    receivedAt: "2025-04-12T07:00:00Z",
    isRead: true
  },
  {
    id: 24,
    sender: "chris.morgan@example.com",
    subject: "Road Trip Essentials",
    body: "Don't forget these must-haves for the trip!",
    receivedAt: "2025-04-11T15:20:00Z",
    isRead: false
  },
  {
    id: 25,
    sender: "promotions@fashionhub.com",
    subject: "Spring Collection Launch",
    body: "Check out the fresh new styles for this season!",
    receivedAt: "2025-04-11T09:10:00Z",
    isRead: false
  },
  {
    id: 26,
    sender: "support@easybill.com",
    subject: "Payment Successful",
    body: "Thank you for your payment. Your receipt is attached.",
    receivedAt: "2025-04-10T08:45:00Z",
    isRead: true
  },
  {
    id: 27,
    sender: "olivia.martin@example.com",
    subject: "Concert Tickets",
    body: "Got us tickets for the concert next month! 🎶",
    receivedAt: "2025-04-09T21:30:00Z",
    isRead: false
  },
  {
    id: 28,
    sender: "info@webinarhub.com",
    subject: "Upcoming Webinar Reminder",
    body: "Don't forget to join us for the live session tomorrow!",
    receivedAt: "2025-04-09T14:00:00Z",
    isRead: true
  },
  {
    id: 29,
    sender: "sophie.bennett@example.com",
    subject: "New Cafe Opened",
    body: "Just visited the new cafe downtown — highly recommend!",
    receivedAt: "2025-04-08T17:45:00Z",
    isRead: false
  },
  {
    id: 30,
    sender: "offers@airtravel.com",
    subject: "Flight Deals Inside!",
    body: "Grab limited-time discounts on your next flight.",
    receivedAt: "2025-04-08T06:20:00Z",
    isRead: true
  }
];