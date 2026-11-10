import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./quartz/components/types"
import Header from "./quartz/components/Header"
import PageTitle from "./quartz/components/PageTitle"
import Content from "./quartz/components/Content"
import TableOfContents from "./quartz/components/TableOfContents"
import Explorer from "./quartz/components/Explorer"
import Footer from "./quartz/components/Footer"
import Search from "./quartz/components/Search"
import Darkmode from "./quartz/components/Darkmode"
import ReaderMode from "./quartz/components/ReaderMode"
import Backlinks from "./quartz/components/Backlinks"

export default {
  defaultContentPageLayout: {
    beforeBody: [Header(), PageTitle(), Content()],
    left: [Search(), Darkmode(), ReaderMode(), Explorer()],
    right: [TableOfContents(), Backlinks()],
    afterBody: [Footer()],
  },
  defaultListPageLayout: {
    beforeBody: [Header(), PageTitle(), Content()],
    left: [Search(), Darkmode(), ReaderMode(), Explorer()],
    right: [],
    afterBody: [Footer()],
  },
}
