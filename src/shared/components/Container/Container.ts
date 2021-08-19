import { Component, Vue } from 'vue-property-decorator'

/**
 * Container class that wraps components
 * 
 * @author Javlon Khalimjonov <khalimjanov2000@gmail.com>
 */
@Component<Container>({name: 'Container'})
export class Container extends Vue {
  
/**
 * Container class that wraps components
 * 
 * @author Javlon Khalimjonov <javlon.khalimjonov>
 */
  protected hasChild(): boolean {
    return true
  }

}