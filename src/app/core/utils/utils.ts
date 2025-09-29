import {Injectable} from '@angular/core';
import {LucideIconData} from 'lucide-angular';

@Injectable({
  providedIn: 'root'
})
export class Utils {
  getIcon(iconsObj:any, key:string) {
    return (iconsObj as Record<string, LucideIconData>)[key]
  }
}
