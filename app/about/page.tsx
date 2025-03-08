export default function About() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="lab-bg w-full">
        <div className="bg-black/30 py-12">
          <h1 className="page-heading text-white">About</h1>
        </div>
      </div>

      <div className="accent-bar"></div>

      {/* Mission */}
      <section className="py-12 bg-background">
        <div className="content-container">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="prose max-w-none">
            <p className="text-lg">
              Many students and laymen consider STEM a mysterious craft though their views on it may vary. Some look at
              STEM in awe and admiration. Others think the vast discipline to be a monster intent on tormenting them
              during their long years of school. We here at STEMHiss are among the first category. We also believe that
              STEM can be demystified by knowing its history and that understanding the history of STEM can lead to
              inspiration and appreciation of it. Thus, to encourage the assimilation of science history among the
              masses and in doing so, set many hearts with gratitude, inspiration, and awe of science is our mission and
              we hope this will make the world a better place.
            </p>

            <div className="my-8 p-4 bg-accent/20 rounded-lg">
              <p className="font-medium">
                There are two issues/needs/wants we wish to address through our communication of STEM:
              </p>
              <ol className="list-decimal pl-6 mt-2 space-y-2">
                <li>Students finding STEM too boring, too confusing or too difficult.</li>
                <li>People who long for knowledge of STEM due to curiosity and passion.</li>
              </ol>
            </div>

            <div className="my-8">
              <p className="text-xl font-serif italic">
                Learning about the history of STEM will allow students to appreciate STEM better and to be inspired by
                the erudite scientists and mathematicians who made prolific discoveries that impact our lives so
                profoundly today!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Members */}
      <section className="py-12 bg-muted">
        <div className="content-container">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-6">Board of Members</h2>
            <ul className="space-y-3">
              <li>
                <span className="font-medium">Velan Mangai Sivakumar</span> - Founder and President
              </li>
              <li>
                <span className="font-medium">Adil Mukhi</span> - Founding Vice President
              </li>
              <li>
                <span className="font-medium">Aarush Vinay Rao</span> - Vice President
              </li>
              <li>
                <span className="font-medium">Chirantan Masur</span> - Senior Graphic Designer
              </li>
              <li>
                <span className="font-medium">Melody Chang</span> - Junior Graphic Designer
              </li>
              <li>
                <span className="font-medium">Anika Singh</span> - Head of Communications
              </li>
              <li>
                <span className="font-medium">Shyam Challa</span> - Editor and Chief Writer
              </li>
              <li>
                <span className="font-medium">Rudransh Tandon</span> - Activities Coordinator
              </li>
              <li>
                <span className="font-medium">David Simmons</span> - Mathematics Coordinator
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

