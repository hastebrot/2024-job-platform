import { PageLayout } from "./PageLayout";

export const IndexPage = () => {
  return (
    <PageLayout>
      <div>
        <header>
          <div>
            <span>Firstname</span>
            <span>Lastname</span>
            <span>Active</span>
          </div>
          <div>
            <span>Last Clocked In</span>
            <span>A few seconds ago</span>
            <span>Last Messaged</span>
            <span>2 days ago</span>
            <span>Employee ID</span>
            <span>#EMP7</span>
          </div>
        </header>
        <nav>
          <span>Personal Information</span>
          <span>Contract</span>
          <span>Payroll</span>
          <span>Time Management</span>
          <span>Assets</span>
          <span>Documents</span>
          <span>Training</span>
          <span>Finance</span>
        </nav>
        <section>
          <span>Personal Information</span>
          <span>Full Name</span>
          <span>Firstname Lastname</span>
          <span>Gender</span>
          <span>Male</span>
          <span>Marital Status</span>
          <span>Single</span>
          <span>Religion</span>
          <span>Muslim</span>
          <span>Place of Birth</span>
          <span>City</span>
          <span>Birthdate</span>
          <span>01 February 1995</span>
          <span>Blood Type</span>
          <span>B</span>
          <span>Age</span>
          <span>29</span>
        </section>
        <section>
          <span>Address Information</span>
          <span>Residential Address</span>
          <span>1234 Washington Ave., Manchester, Kentucky 12345</span>
          <span>Notes</span>
          <span>Add Note</span>
          <span>Citizen ID Address</span>
          <span>1234 Ash Dr., San Jose, South Dakota 12345</span>
          <span>Notes</span>
          <span>Main entry likely from Ash Drive. Check for a driveway or garage access.</span>
        </section>
        <section>
          <span>Contact Information</span>
          <span>Personal Contact</span>
          <span>Phone Number</span>
          <span>+12-345-678-999</span>
          <span>Email</span>
          <span>name@domain.com</span>
          <span>Other Contact</span>
          <span>Not Provided</span>
        </section>
      </div>
    </PageLayout>
  );
};
