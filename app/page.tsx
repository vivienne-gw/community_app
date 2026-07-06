'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase/client'
import { Card, CardContent } from '@/components/ui/card'
import { Header } from '@/components/layout/Header'
import { BottomNav } from '@/components/layout/BottomNav'
import { MapPin } from 'lucide-react'

type Spot = {
  id: string
  title: string
  location: string
  spot_type: 'track' | 'road'
  image_url: string | null
  is_indoor: boolean
  is_free: boolean
}

export default function HomePage() {
  const [spots, setSpots] = useState<Spot[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchSpots() {
      const { data, error } = await supabase
        .from('spots')
        .select('id, title, location, spot_type, image_url, is_indoor, is_free')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('스팟 목록을 불러오지 못했어요:', error.message)
      } else {
        setSpots(data ?? [])
      }
      setIsLoading(false)
    }

    fetchSpots()
  }, [])

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <Header />

      <main className="flex flex-1 flex-col gap-3 px-4 py-4">
        {isLoading && (
          <>
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse">
                <CardContent className="h-20 p-4" />
              </Card>
            ))}
          </>
        )}

        {!isLoading && spots.length === 0 && (
          <div className="flex flex-col items-center gap-2 py-16 text-center text-muted-foreground">
            <MapPin size={28} strokeWidth={1.5} />
            <p className="text-sm">등록된 스팟이 아직 없어요.</p>
          </div>
        )}

        {!isLoading &&
          spots.map((spot) => (
            <Card key={spot.id}>
              <CardContent className="flex items-center gap-3 p-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-md bg-muted">
                  {spot.image_url ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={spot.image_url}
                      alt={spot.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <MapPin size={20} className="text-muted-foreground" strokeWidth={1.8} />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{spot.title}</p>
                  <p className="truncate text-xs text-muted-foreground">{spot.location}</p>
                  <div className="mt-1 flex gap-1">
                    <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                      {spot.spot_type === 'track' ? '트랙' : '로드'}
                    </span>
                    {spot.is_indoor && (
                      <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                        실내
                      </span>
                    )}
                    {spot.is_free && (
                      <span className="rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                        무료
                      </span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
      </main>

      <BottomNav />
    </div>
  )
}
